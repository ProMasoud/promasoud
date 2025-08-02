"use client";

import { getContentRewriteSuggestions } from '@/ai/flows/content-rewrite-suggestions';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContentRewriterProps {
  initialContent: string;
}

export function ContentRewriter({ initialContent }: ContentRewriterProps) {
  const [content, setContent] = useState(initialContent);
  const [rewrittenContent, setRewrittenContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleRewrite = async () => {
    setIsLoading(true);
    setRewrittenContent('');
    try {
      const result = await getContentRewriteSuggestions({ content });
      setRewrittenContent(result.rewrittenContent);
    } catch (error) {
      console.error('Error rewriting content:', error);
      toast({
        title: 'Error',
        description: 'Failed to rewrite content. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-card/70 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-primary" />
          AI Content Enhancer
        </CardTitle>
        <CardDescription>
          This is a live demo of my ability to integrate AI. Edit the text and see how it can be improved.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          placeholder="Enter content to rewrite..."
        />
        <Button onClick={handleRewrite} disabled={isLoading || !content} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enhancing...
            </>
          ) : (
            '✨ Enhance with AI'
          )}
        </Button>
        {rewrittenContent && (
          <div className="mt-4 rounded-md border bg-background/50 p-4">
            <h4 className="font-semibold mb-2">Suggested Rewrite:</h4>
            <p className="text-sm text-muted-foreground">{rewrittenContent}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
