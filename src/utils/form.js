

    export const clearForm = (elRef) => {
        elRef.current['first_name'].value = ''
        elRef.current['last_name'].value = ''
        elRef.current['email'].value = ''
        elRef.current['phone'].value = ''
    }