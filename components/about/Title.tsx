const Title = ({ text }: { text: string }) => {
  return (
    <p className="text-base md:text-lg font-medium text-foreground mb-6 md:mb-8">
      {text}
    </p>
  );
};

export default Title;
