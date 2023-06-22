const config = {
    type: 'carousel',
    perView: 4,
    focusAt: 'center',
    breakpoints: {
        900: {
            perView: 3
        },
        780: {
            perView: 2
        },
        400: {
            perView: 1,
        }
    },
};


new Glide('.glide', config).mount()