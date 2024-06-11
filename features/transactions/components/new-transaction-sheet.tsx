import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { insertTransactionSchema } from '@/db/schema';
import { z } from 'zod';
import { useNewTransaction } from '../hooks/use-new-transaction';
import { useCreateTransaction } from '../api/use-create-transaction';

const formSchema = insertTransactionSchema.omit({ id: true });

type FormValues = z.input<typeof formSchema>;

const NewTransactionSheet = () => {
  const { isOpen, onClose } = useNewTransaction();

  const mutation = useCreateTransaction();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New transaction</SheetTitle>
          <SheetDescription>Create a new transaction</SheetDescription>
        </SheetHeader>
        <p>Transaction form</p>
      </SheetContent>
    </Sheet>
  );
};

export default NewTransactionSheet;
