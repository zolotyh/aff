export default function () {
    return {
        files: [
            'src/**/*.ts',
            '!src/**/*.test.ts'
        ],

        tests: [
            'src/**/*.test.ts'
        ],
        env: {
            type: 'node',
        },
        autoDetect: true,
    };
};
