import { useOpenCategory } from '@/features/categories/hooks/use-open-category';
import { cn } from '@/lib/utils';
import { TriangleAlert } from 'lucide-react';

interface CategoryColumnProps {
  id: string;
  category: string | null;
  categoryId: string | null;
}

export const CategoryColumn = ({
  id,
  category,
  categoryId,
}: CategoryColumnProps) => {
  const { onOpen: onOpenCategory } = useOpenCategory();

  const onClick = () => {
    if (categoryId) {
      onOpenCategory(categoryId);
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center cursor-pointer hover:underline',
        !category && 'text-rose-500'
      )}
    >
      {!category && <TriangleAlert className="size-4 mr-2 shrink-0" />}
      {category || 'Uncategoryzed'}
    </div>
  );
};
