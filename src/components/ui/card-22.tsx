import * as React from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Interface for component props for type safety and reusability
interface PlaceCardProps {
  image: string;
  tags: string[];
  insightLabel: string;
  title: string;
  dateRange: string;
  hostType: string;
  isTopRated?: boolean;
  description: string;
  className?: string;
}

export const PlaceCard = ({
  image,
  tags,
  insightLabel,
  title,
  dateRange,
  hostType,
  isTopRated = false,
  description,
  className,
}: PlaceCardProps) => {

  // Animation variants for staggering content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      variants={contentVariants}
      // --- NEW: Added hover animation ---
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 10px 30px -5px hsl(var(--foreground) / 0.1)',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      // --- END NEW ---
      className={cn(
        'w-full max-w-sm overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-lg cursor-pointer',
        className
      )}
    >
      {/* Image Section */}
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        {/* Top Badges and Reads */}
        <div className="absolute top-3 left-3 flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-background/70 backdrop-blur-sm">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="flex items-center gap-1 bg-background/70 backdrop-blur-sm">
            <Eye className="h-4 w-4" /> {insightLabel}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <motion.div variants={contentVariants} className="p-5 space-y-4">
        <motion.div variants={itemVariants} className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{title}</h3>
          {isTopRated && <Badge variant="outline">Top rated</Badge>}
        </motion.div>

        <motion.div variants={itemVariants} className="text-m text-muted-foreground">
          <span>{dateRange}</span> &bull; <span>{hostType}</span>
        </motion.div>

        <motion.p variants={itemVariants} className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </motion.p>

        <motion.div variants={itemVariants} className="pt-2">
          <Button className="group w-full">
            Read More
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
