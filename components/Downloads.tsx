interface Download {
  id: number;
  title: string;
  fileType: string;
  fileSize: string;
}

interface DownloadsProps {
  downloads: Download[];
}

export default function Downloads({ downloads }: DownloadsProps) {
  return (
    <div className="mx-auto w-[80%] my-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Downloads</h2>
      
      <div className="space-y-4">
        {downloads.map((download) => (
          <div
            key={download.id}
            className="flex justify-between items-center bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900">{download.title}</h3>
              <p className="text-gray-600 text-sm mt-1">
                {download.fileType} • {download.fileSize}
              </p>
            </div>
            <a href="#" className="text-red-500 hover:text-red-600">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2V22M16 22L8 14M16 22L24 14M2 28H30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
