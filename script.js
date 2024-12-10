document.addEventListener('DOMContentLoaded', function() {
    // 处理微信号复制
    const copyBtn = document.querySelector('.copy-wechat');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const wechatId = this.dataset.wechat;
            navigator.clipboard.writeText(wechatId).then(() => {
                // 复制成功后跳转到微信
                window.location.href = 'weixin://';
            }).catch(err => {
                console.error('复制失败:', err);
                alert('复制失败，请手动复制');
            });
        });
    }

    // 初始化所有的工具提示
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
}); 