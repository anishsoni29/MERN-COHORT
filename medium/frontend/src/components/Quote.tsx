export const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        {/* comes under the parent component */}
        <div className="max-w-lg text-3xl font-bold">
          "The customer support I received was exceptional. The support team
          went above and beyond to address my concerns."{" "}
        </div>
      </div>
      <div className="max-w-md text-center text-xl font-semibold">
        Julies Winfield
      </div>
      <div className="max-w-md text-center font-light text-md text-slate-500">
        CEO | Acne Max
      </div>
    </div>
  );
};