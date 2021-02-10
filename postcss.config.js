module.exports = {
    modules: true,
    plugins: {
        'postcss-modules': {
            globalModulePaths: [
                '/resources/',
                '/node_modules/',
            ],
        },
        autoprefixer: {
            grid: true,
        },
    },
};
