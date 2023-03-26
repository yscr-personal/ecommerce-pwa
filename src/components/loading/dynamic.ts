import dynamic from 'next/dynamic';

const DynamicLoading = dynamic(() => import('./index'));

export default DynamicLoading;
