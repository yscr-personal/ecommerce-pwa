import dynamic from 'next/dynamic';

const DynamicTodoCard = dynamic(() => import('./index'));

export default DynamicTodoCard;
