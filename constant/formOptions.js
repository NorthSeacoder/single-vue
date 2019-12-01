export default {
    fieldDefs: [
        {label: '标题', field: 'title'},
        {label: '教师', field: 'teacher.alt'},
        // {label: '已下载', field: 'downloaded',type:'switch'},
        // {label: '已看完', field: 'watched',type:'switch'},
    ],
    btnDefs: [
        {text: '保存', event: 'save', props: {class: 'normal'}} 
    ]
};
