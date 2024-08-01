import React, { useMemo } from 'react';
import { Table } from './Table';

const ReactTable = () => {
    const cols = useMemo(() => [
        {
            header: 'Name',
            cell: (row) => row.renderValue(),
            accessorKey: 'name',
        },
        {
            header: 'Price',
            cell: (row) => row.renderValue(),
            accessorKey: 'price',
        },
        {
            header: 'Quantity',
            cell: (row) => row.renderValue(),
            accessorKey: 'quantity',
        },
    ], []);

    const dummyData = () => {
        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                id: i,
                name: `Item ${i}`,
                price: 100,
                quantity: 1,
            });
        }
        return items;
    };

    return (
        <div className="px-10 py-5 md:w-1/2 m-auto">
            <Table data={dummyData()} columns={cols} showNavigation/>
        </div>
    );
};

export default ReactTable;
