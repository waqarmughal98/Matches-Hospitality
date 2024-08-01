import { getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, } from '@tanstack/react-table';

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
                <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                    <div className="overflow-hidden p-2">
                        <table className="min-w-full text-center rounded-lg">
                            <thead className="bg-primaryGreen rounded-tr-lg">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header, index) => (
                                            <th
                                                key={header.id}
                                                className={`px-6 py-4 text-lg font-medium text-black ${index === 0 ? 'text-left' : 'text-center'}`}
                                            >
                                                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        ))}
                                    </tr>
                                ))}


                            </thead>
                            <tbody className='border border-borderInput'>
                                {table.getRowModel().rows.map((row) => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map((cell , index) => (
                                            <td className={`whitespace-nowrap px-6 py-4 text-sm font-light text-white border-b border-borderInput ${index === 0 ? 'text-left' : 'text-center'}`} key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {showNavigation ? (
                            <>
                                <div className="h-2 mt-5" />
                                <div className="flex items-center gap-2 justify-between">
                                    <div className='flex gap-5'>
                                        <button
                                            className="cursor-pointer rounded border p-1"
                                            onClick={() => table.setPageIndex(0)}
                                            disabled={!table.getCanPreviousPage()}
                                        >
                                            {'<<'}
                                        </button>
                                        <button
                                            className="cursor-pointer rounded border p-1"
                                            onClick={() => table.previousPage()}
                                            disabled={!table.getCanPreviousPage()}
                                        >
                                            {'<'}
                                        </button>
                                        <button
                                            className="cursor-pointer rounded border p-1"
                                            onClick={() => table.nextPage()}
                                            disabled={!table.getCanNextPage()}
                                        >
                                            {'>'}
                                        </button>
                                        <button
                                            className="cursor-pointer rounded border p-1"
                                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                            disabled={!table.getCanNextPage()}
                                        >
                                            {'>>'}
                                        </button>
                                    </div>
                                    <div className='flex gap-2'>
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
                                        className='bg-transparent'
                                        onChange={(e) => {
                                            table.setPageSize(Number(e.target.value));
                                        }}
                                    >
                                        {[10, 20, 30, 40, 50].map((pageSize) => (
                                            <option key={pageSize} value={pageSize} className='!bg-transparent'>
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
