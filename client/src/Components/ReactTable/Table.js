import { getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, } from '@tanstack/react-table';
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";





export const Table = ({ data, columns, showNavigation }) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full  sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-cardBG rounded-lg">
                        <table className="min-w-full text-center rounded-lg">
                            <thead className="bg-cardBG rounded-tr-lg border-b-2 border-borderInput">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header, index) => (
                                            <th
                                                key={header.id}
                                                className={`px-6 py-4 text-lg font-medium text-white ${index === 0 ? 'text-left' : 'text-center'}`}
                                            >
                                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody  >
                                {table.getRowModel().rows.map((row) => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map((cell, index) => (
                                            <td className={`whitespace-nowrap px-6 py-6 text-md font-light bg-cardBG text-white border-b border-borderInput/30 ${index === 0 ? 'text-left' : 'text-center'}`} key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {showNavigation ? (
                            <>
                                <div className="flex items-center gap-2 justify-between py-8 px-7">
                                    <div className='flex gap-5'>
                                        <button
                                            className="cursor-pointer rounded border p-2 bg-primaryGreen text-black"
                                            onClick={() => table.setPageIndex(0)}
                                            disabled={!table.getCanPreviousPage()}
                                        >
                                            <FaAnglesLeft size={15}/>

                                        </button>
                                        <button
                                            className="cursor-pointer rounded border p-2"
                                            onClick={() => table.previousPage()}
                                            disabled={!table.getCanPreviousPage()}
                                        >
                                            <FaAngleLeft size={15} />
                                        </button>
                                        <button
                                            className="cursor-pointer rounded border p-2"
                                            onClick={() => table.nextPage()}
                                            disabled={!table.getCanNextPage()}
                                        >
                                            <FaAngleRight size={15}/>
                                        </button>
                                        <button
                                            className="cursor-pointer rounded border p-2"
                                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                            disabled={!table.getCanNextPage()}
                                        >
                                            <FaAnglesRight size={15}/>
                                        </button>
                                    </div>
                                    <div className='flex gap-x-3'>
                                        <span className="flex cursor-pointer items-center gap-1">
                                            <div>Page</div>
                                            <strong>
                                                {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                                            </strong>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            | Go to page:
                                            <input
                                                type="number"
                                                defaultValue={table.getState().pagination.pageIndex + 1}
                                                onChange={(e) => {
                                                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                                    table.setPageIndex(page);
                                                }}
                                                className="w-16 rounded border p-1 bg-transparent"
                                            />
                                        </span>
                                    </div>
                                    <select
                                        value={table.getState().pagination.pageSize}
                                        className='bg-transparent px-2 py-1 rounded-md border border-borderInput'
                                        onChange={(e) => {
                                            table.setPageSize(Number(e.target.value));
                                        }}
                                    >
                                        {[10, 20, 30, 40, 50].map((pageSize) => (
                                            <option key={pageSize} value={pageSize} className='!bg-cardBG'>
                                                Show {pageSize}
                                            </option>
                                        ))}
                                    </select>
                                    {/* <div className="h-4" /> */}
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
