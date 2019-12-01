export default {
    enableClientPagination :true,
    colDefs: [
        {label: 'ID', field: 'id'},
        {label: '标题', field: 'title'},
        {label: '描述', field: 'description'},
        {label: '时长', field: 'time'},
        {label: '教师', field: 'teacher.alt'},
        {label: '已下载', field: 'downloaded'},
        {label: '已看完', field: 'watched'},
    ]
};