interface ImportCardProps {
  data: string[][];
  onCancel: () => void;
  onSubmit: (data: any) => void;
}

export const ImportCard = ({ data, onCancel, onSubmit }: ImportCardProps) => {
  return <div>ImportCard</div>;
};
