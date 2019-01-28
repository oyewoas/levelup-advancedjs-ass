const doProject = (project, callback) => {
    console.log(`Starting my ${project} project.`);
    timeOut = setTimeout(
        () => {
        callback();

        }, 3000);
    
};
const alertFinished = () => {
    console.log('Finished my project');
};
doProject('build blog', alertFinished);