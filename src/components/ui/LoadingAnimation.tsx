const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative flex items-center justify-center w-24 h-24">
        <div className="absolute w-full h-full rounded-full bg-primary/20 animate-pulse-slow"></div>
        <div className="absolute rounded-full w-16 h-16 bg-primary/40 animate-pulse-medium"></div>
        <span className="z-10 text-5xl font-extrabold text-primary animate-fade-in-scale">
          A
        </span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
