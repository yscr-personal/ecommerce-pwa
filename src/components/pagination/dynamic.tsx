import dynamic from 'next/dynamic';

const DynamicPagination = dynamic(() => import('./index'));

export default DynamicPagination;
