#!/usr/bin/env node

console.log('OUR custom setup script');
// Generate constants/Backend.ts from constants/Backend.ts.template
const fs = require('fs');
const path = require('path');

// Generate inly if it's not already generated
if (!fs.existsSync(path.resolve(__dirname, '../constants/Backend.ts')) || process.env.FORCE_SETUP) {
    if (!fs.existsSync(path.resolve(__dirname, '../constants/Backend.ts.template'))) {
        console.error('Missing \'constants/Backend.ts.template\' file');
        process.exit(-1);
    }
    console.log('Generating \'constants/Backend.ts\' file...');
    const backendTemplate = fs.readFileSync(path.resolve(__dirname, '../constants/Backend.ts.template'), 'utf8');
    const backend = backendTemplate.replace(/{{BACKEND_URL}}/g, process.env.BACKEND_URL || 'http://localhost:8080');
    fs.writeFileSync(path.resolve(__dirname, '../constants/Backend.ts'), backend);
    console.log('File \'constants/Backend.ts\' generated successfully');
} else {
    console.log('File \'constants/Backend.ts\' already exists, skipping...');
}

console.log('OUR setup script completed');