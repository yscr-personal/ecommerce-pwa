type Props = {
  mean: number;
  total?: number;
};

export default function Rating({ mean, total }: Readonly<Props>) {
  return (
    <div className="flex items-center">
      <svg
        aria-hidden="true"
        className="h-5 w-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Rating star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
      <p className="ml-2 text-sm font-bold text-gray-900">{mean.toFixed(1)}</p>
      {!!total && (
        <>
          <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
          <span className="text-sm font-medium text-gray-900 underline hover:no-underline">
            {total} reviews
          </span>
        </>
      )}
    </div>
  );
}
