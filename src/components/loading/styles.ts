import tw from 'tailwind-styled-components';

export const Spinner = tw.div`
    h-32
    w-32
    animate-spin
    rounded-full
    border-b-2
    border-gray-900
`;

export const Container = tw.div`
    flex
    items-center
    justify-center
`;
