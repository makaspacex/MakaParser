#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { build } = require('esbuild');

!(async () => {
    const version = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'),
    ).version.trim();

    const artifacts = [
        { src: 'server.js', dest: 'makaparser.min.js' },
    ];

    for await (const artifact of artifacts) {
        await build({
            entryPoints: [artifact.src],
            bundle: true,
            minify: true,
            sourcemap: false,
            platform: 'browser',
            format: 'iife',
            outfile: artifact.dest,
        });
    }

    let content = fs.readFileSync(path.join(__dirname, 'makaparser.min.js'), {
        encoding: 'utf8',
    });
    content = content.replace(
        /eval\(('|")(require\(('|").*?('|")\))('|")\)/g,
        '$2',
    );
    fs.writeFileSync(
        path.join(__dirname, 'dist/makaparser.no-bundle.js'),
        content,
        {
            encoding: 'utf8',
        },
    );

    await build({
        entryPoints: ['dist/makaparser.no-bundle.js'],
        bundle: true,
        minify: true,
        sourcemap: false,
        platform: 'node',
        format: 'cjs',
        outfile: 'dist/makaparser.bundle.js',
    });
    fs.writeFileSync(
        path.join(__dirname, 'dist/makaparser.bundle.js'),
        `// MAKA_PARSER_VERSION: ${version}
${fs.readFileSync(path.join(__dirname, 'dist/makaparser.bundle.js'), {
    encoding: 'utf8',
})}`,
        {
            encoding: 'utf8',
        },
    );
})()
    .catch((e) => {
        console.log(e);
    })
    .finally(() => {
        console.log('done');
    });
