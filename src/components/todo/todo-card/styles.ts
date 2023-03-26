import tw from 'tailwind-styled-components';

export const Card = tw.div`
  bg-white
  rounded
  p-4
  shadow-md
`;

export const Container = tw.div`
  flex
  flex-row
  items-center
  justify-between
  space-x-4
`;

export const Checkbox = tw.input`
  cursor-pointer
  transform
  hover:scale-110
  focus:outline-none
  focus:shadow-outline
  w-5
  h-5
`;

export const Title = tw.span<{ $completed: boolean }>`
  ml-2
  font-bold
  ${({ $completed }) => ($completed ? 'line-through' : '')}
`;
