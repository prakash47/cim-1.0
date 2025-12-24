import { useEffect, RefObject, Dispatch, SetStateAction } from 'react';

/**
 * Hook that clears form errors when user clicks outside the form container(s)
 * This provides a better UX by allowing users to start fresh without manually clearing errors
 * 
 * @param formRefs - Array of refs to form containers
 * @param errorSetters - Array of error state setter functions to clear
 */
export function useFormErrorReset(
    formRefs: RefObject<HTMLElement | null>[],
    errorSetters: Dispatch<SetStateAction<string | null>>[]
) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const clickedOutsideAll = formRefs.every((ref) => {
                return ref.current && !ref.current.contains(event.target as Node);
            });

            if (clickedOutsideAll) {
                // Clear all error states
                errorSetters.forEach((setter) => setter(null));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [formRefs, errorSetters]);
}

export default useFormErrorReset;
