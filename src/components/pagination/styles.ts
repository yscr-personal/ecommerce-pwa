import tw from 'tailwind-styled-components';

export const DotsContainer = tw.span`self-end`;

export const Button = tw.button`
    flex
    h-6
    w-6
    items-center
    justify-center
    rounded-full
    border
    border-gray-300
    p-4
    outline-none
    ${({ disabled }) => disabled && 'bg-gray-700 text-white'}
`;

export const ButtonsArea = tw.div`
    flex
    flex-row
    space-x-1
    outline-none
`;
