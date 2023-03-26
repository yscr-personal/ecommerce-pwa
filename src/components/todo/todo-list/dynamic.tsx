import dynamic from 'next/dynamic';

const DynamicTodoList = dynamic(() => import('./index'));

export default DynamicTodoList;
