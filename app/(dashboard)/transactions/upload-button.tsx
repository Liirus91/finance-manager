import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { useCSVReader } from 'react-papaparse';

interface UploadButtonProps {
  onUpload: (results: any) => void;
}

export const UploadButton = ({ onUpload }: UploadButtonProps) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader>
      {({ getRootProps }: any) => (
        <Button size="sm" className="w-full lg:w-auto" {...getRootProps()}>
          <Upload className="size-4 mr-2" />
          Import
        </Button>
      )}
    </CSVReader>
  );
};
