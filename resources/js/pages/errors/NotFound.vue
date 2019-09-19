<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="error-template">
          <h1>アクセスしようとしたページは見つかりませんでした。</h1>
          <div class="error-details">
              <p>URLが間違っているか、ページが削除された可能性があります。</p>
              <p>申し訳ございませんが、URLをご確認いただくか、サイドメニューよりページの選択をお願いいたします。</p>
          </div>
          <div class="error-actions">
            <RouterLink
              class="btn btn-light"
              to="/"
            >
              トップへ
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .error-template {padding: 40px 15px;text-align: center;}
  .error-actions {margin-top:15px;margin-bottom:15px;}
  .error-actions .btn { margin-right:10px; }
</style>
