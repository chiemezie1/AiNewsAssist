
import { motion } from 'framer-motion'
import Image from 'next/image'
import { formatDistanceToNow, parseISO } from 'date-fns'
import { CalendarIcon, LinkIcon, NewspaperIcon } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import  Button  from "@/components/ui/button"

export default function NewsFeedItem({ article, onClick }) {
  const formatPublishDate = (date) => {
    if (!date) return ''
    try {
      return formatDistanceToNow(parseISO(date), { addSuffix: true })
    } catch (error) {
      console.error('Error formatting date:', error)
      return ''
    }
  }

  if (!article) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-card">
        <div className='flex justify-end text-end bg-slate-300 p-2'>
        {article.source && article.source.name && (
              <div className="flex items-center text-sm text-muted-foreground">
                <LinkIcon className="mr-1 h-4 w-4" />
                {article.source.name}
              </div>
            )}
        </div>
        {article.urlToImage && (
          <div className="relative w-full h-48 md:h-64">
            <Image
              src={`/api/imageProxy?url=${encodeURIComponent(article.urlToImage)}`}
              alt={article.title || 'Article image'}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized
            />
          </div>
        )}
        <CardContent className="p-6">
          {article.category && (
            <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
              {article.category}
            </Badge>
          )}
          <h2 className="text-2xl font-bold mb-3 line-clamp-2 text-primary">{article.title || 'Untitled'}</h2>
          {article.summary && (
            <p className="text-muted-foreground mb-4 line-clamp-3">{article.summary}</p>
          )}
        </CardContent>
        <CardFooter className="px-6 py-4 bg-muted/50 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {article.publishedAt && (
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-4 w-4" />
                {formatPublishDate(article.publishedAt)}
              </div>
            )}
          </div>
          <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            <NewspaperIcon className="mr-2 h-4 w-4" />
            View Summary
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}