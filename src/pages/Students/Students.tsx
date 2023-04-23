import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudents } from "../../apis/student.api";
import { Students as StudentsType } from "../../types/student.type";
import { useQuery } from "@tanstack/react-query";
import { useQueryString } from "../../utils/utils";
export default function Students() {
  // const [students, setStudents] = useState<StudentsType>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getStudents(1, 10)
  //     .then((res) => {
  //       setStudents(res.data);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  const queryString: { page?: string } = useQueryString();
  const page = Number(queryString.page) || 1;
  const { data, isLoading } = useQuery({
    queryKey: ["students", page],
    queryFn: () => getStudents(page, 10),
  });

  return (
    <div>
      <h1 className="text-lg">Students</h1>
      {isLoading && (
        <div role="status" className="mt-6 animate-pulse">
          <div className="h-4 mb-4 bg-gray-200 rounded dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-10 bg-gray-200 rounded dark:bg-gray-700" />
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {!isLoading && (
        <div className="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Avatar
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((student) => (
                <tr
                  className="bg-white border-b hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                  key={student.id}
                >
                  <td className="px-6 py-4">{student.id}</td>
                  <td className="px-6 py-4">
                    <img
                      src={student.avatar}
                      alt="student"
                      className="w-5 h-5"
                    />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {student.last_name}
                  </th>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to={`/students/${student.id}`}
                      className="mr-5 font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </Link>
                    <button className="font-medium text-red-600 dark:text-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!isLoading && (
        <div className="flex justify-center mt-6">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
              <li>
                <span className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg cursor-not-allowed hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Previous
                </span>
              </li>
              <li>
                <a
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  href="/students?page=8"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  href="/students?page=1"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
