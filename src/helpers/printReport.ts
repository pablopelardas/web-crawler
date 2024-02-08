export const printReport = (pages: Record<string, number>) => {
    console.log('Report:');
    if (Object.keys(pages).length === 0) {
        console.log('No pages found');
        return;
    }
    for (const page in pages) {
        console.log(`Found ${pages[page]} views in ${page}`);
    }
};