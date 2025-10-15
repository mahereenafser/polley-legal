import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2 } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import LiveChatWidget from '@/components/sections/live-chat-widget';
import { blogPosts } from '@/data/blog-posts';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Polley IP Law Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Image with Overlay */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        {/* Breadcrumb and Back Link */}
        <div className="absolute top-32 left-0 right-0 z-10">
          <div className="mx-auto max-w-[900px] px-6 md:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Title and Meta - Positioned at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="mx-auto max-w-[900px] px-6 md:px-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}>
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="mx-auto max-w-[900px] px-6 md:px-12">
          {/* Excerpt */}
          <div className="mb-12 p-6 rounded-xl border-l-4" style={{ backgroundColor: '#fbe7d9', borderColor: '#1f3130' }}>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#1f3130' }}>
              {post.excerpt}
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-[#1f3130] prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-[#1f3130] prose-strong:font-bold">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-5xl font-display mb-6 mt-12" style={{ color: '#1f3130' }}>
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              } else if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-4xl font-display mb-5 mt-10" style={{ color: '#1f3130' }}>
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-2xl font-display mb-4 mt-8" style={{ color: '#1f3130' }}>
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph.split('**').map((part, i) =>
                      i % 2 === 0 ? part : <strong key={i} className="font-bold" style={{ color: '#1f3130' }}>{part}</strong>
                    )}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t" style={{ borderColor: '#E8E9E6' }}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold" style={{ color: '#1f3130' }}>Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm"
                  style={{ backgroundColor: '#fbe7d9', color: '#1f3130' }}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: '#fbe7d9' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5" style={{ color: '#1f3130' }} />
                <span className="font-semibold" style={{ color: '#1f3130' }}>Share this article</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-80" style={{ backgroundColor: '#1f3130', color: '#ffffff' }}>
                  Twitter
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-80" style={{ backgroundColor: '#1f3130', color: '#ffffff' }}>
                  LinkedIn
                </button>
                <button className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-80" style={{ backgroundColor: '#1f3130', color: '#ffffff' }}>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 border-t border-b" style={{ borderColor: '#E8E9E6', backgroundColor: '#fbe7d9' }}>
        <div className="mx-auto max-w-[900px] px-6 md:px-12">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: '#1f3130' }}>
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-2" style={{ color: '#1f3130' }}>
                {post.author}
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#7A8380' }}>
                {post.author === 'Daniel Polley'
                  ? 'Daniel Polley is the Managing Shareholder at Polley IP Law, P.A., specializing in comprehensive intellectual property protection for patents, trademarks, and copyrights across Florida.'
                  : 'Miles Polley is an Associate at Polley IP Law, P.A., bringing detailed attention and strategic insight to intellectual property matters for clients throughout Florida.'}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: '#1f3130' }}
              >
                View Profile
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <h2 className="font-display text-4xl md:text-5xl mb-12" style={{ color: '#1f3130' }}>
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex-1 flex flex-col p-6">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start" style={{ backgroundColor: '#fbe7d9', color: '#1f3130' }}>
                        {relatedPost.category}
                      </span>

                      <h3 className="font-display text-xl mb-3 leading-tight transition-colors duration-300 group-hover:opacity-80" style={{ color: '#1f3130' }}>
                        {relatedPost.title}
                      </h3>

                      <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: '#7A8380' }}>
                        {relatedPost.excerpt.substring(0, 120)}...
                      </p>

                      <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-4" style={{ color: '#1f3130' }}>
                        Read Article
                        <ArrowLeft className="w-4 h-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1f3130' }}>
        <div className="mx-auto max-w-[900px] px-6 md:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Our experienced IP attorneys are ready to help with patent attorney Florida services, trademark attorney Florida protection, and comprehensive IP litigation attorney Florida support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#f8d0b3', color: '#1f3130' }}
          >
            Schedule Free Consultation
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>

      <Footer />
      <LiveChatWidget />
    </main>
  );
}
