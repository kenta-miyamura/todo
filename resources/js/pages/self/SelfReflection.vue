<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-3">
        <h3>要素</h3>
        <draggable class="list-group" :list="all" group="selfReflection">
          <div
            class="list-group-item"
            v-for="(element, index) in all"
            :key="`all-${index}`"
          >
            <span class="font-weight-bold">{{ element.title }}</span> : <br>{{ element.content }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>重要</h3>
        <draggable class="list-group" :list="important" group="selfReflection">
          <div
            class="list-group-item"
            v-for="(element, index) in important"
            :key="`important-${index}`"
          >
            <span class="font-weight-bold">{{ index + 1 }}位</span>
            <span class="font-weight-bold">{{ element.title }}</span> : <br>{{ element.content }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>普通</h3>
        <draggable class="list-group" :list="normal" group="selfReflection">
          <div
            class="list-group-item"
            v-for="(element, index) in normal"
            :key="`normal-${index}`"
          >
            <span class="font-weight-bold">{{ element.title }}</span> : <br>{{ element.content }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>重要でない</h3>
        <draggable class="list-group" :list="unimportant" group="selfReflection">
          <div
            class="list-group-item"
            v-for="(element, index) in unimportant"
            :key="`unimportant-${index}`"
          >
            <span class="font-weight-bold">{{ element.title }}</span> : <br>{{ element.content }}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      all: [
        { id: 1, title: '受容', content: 'ありのままの自分を受け入れてもらう' },
        { id: 2, title: '正確', content: '自分の意見や信念正しく伝える' },
        { id: 3, title: '達成', content: 'なにか重要なことを達成する' },
        { id: 4, title: '冒険', content: '新しくてワクワクする体験をする' },
        { id: 5, title: '魅力', content: '身体的な魅力を保つ' },
        { id: 6, title: '権威', content: '他者に対して責任を持って指導する' },
        { id: 7, title: '自治', content: '人まかせにしないで自分で決める' },
        { id: 8, title: '美的', content: '身のまわりの美しいものを味わう' },
        { id: 9, title: '庇護', content: '他者のめんどうをみる' },
        { id: 10, title: '挑戦', content: '難しい仕事や問題に取り組む' },
        { id: 11, title: '変化', content: '変化に富んだバラエティ豊かな人生を送る' },
        { id: 12, title: '快適', content: '喜びに満ちた快適な人生を送る' },
        { id: 13, title: '誓約', content: '絶対に破れない約束や近いを結ぶ' },
        { id: 14, title: '慈愛', content: '他者を心配して助ける' },
        { id: 15, title: '貢献', content: '世界の役に立つことをする' },
        { id: 16, title: '協調', content: '他者と強力して何かをする' },
        { id: 17, title: '礼儀', content: '他者に対して誠実で礼儀正しく接する' },
        { id: 18, title: '創造', content: '新しくて斬新なアイデアを生む' },
        { id: 19, title: '信頼', content: '信用があって頼れる人間になる' },
        { id: 20, title: '義務', content: '自分の義務と責任を果たす' },
        { id: 21, title: '調和', content: '周囲の環境と調和しながら生きる' },
        { id: 22, title: '興奮', content: 'スリルと刺激に満ちた人生を送る' },
        { id: 23, title: '貞節', content: 'パートナーにウソをつかず誠実に生きる' },
        { id: 24, title: '名声', content: '有名になって存在を認めれる' },
        { id: 25, title: '家族', content: '幸福で愛に満ちた家庭を作る' },
        { id: 26, title: '体力', content: '丈夫で強い身体を保つ' },
        { id: 27, title: '柔軟', content: '新たな環境にも簡単になじむ' },
        { id: 28, title: '許し', content: '他人を許しながら生きる' },
        { id: 29, title: '友情', content: '親密で助け合える友人を作る' },
        { id: 30, title: '愉楽', content: '遊んで楽しむこと' },
        { id: 31, title: '寛大', content: '自分の物を他人にあたえる' },
        { id: 32, title: '真実', content: '自分が正しいと思うとおりに行動する' },
        { id: 33, title: '信教', content: '自分を超えた存在の意思を考える' },
        { id: 34, title: '成長', content: '変化と成長を維持する' },
        { id: 35, title: '健康', content: '健やかで体調よく生きる' },
        { id: 36, title: '有益', content: '他人の役に立つこと' },
        { id: 37, title: '正直', content: 'ウソをつかず正直に生きる' },
        { id: 38, title: '希望', content: 'ポジティブで楽観的に生きる' },
        { id: 39, title: '謙遜', content: '地味で控えめに生きる' },
        { id: 40, title: '笑い', content: '人生や世界のユーモラスな側面を見る' },
        { id: 41, title: '独立', content: '他者に依存しないで生きる' },
        { id: 42, title: '勤勉', content: '自分の仕事に一生懸命取り組む' },
        { id: 43, title: '平安', content: '自分の内面の平和を維持する' },
        { id: 44, title: '親密', content: 'プライベートな体験を他人とシェアする' },
        { id: 45, title: '正義', content: 'すべての人を公平に扱う' },
        { id: 46, title: '知識', content: '価値ある知識を学ぶ、または生み出す' },
        { id: 47, title: '余暇', content: '自分の時間をリラックスして楽しむ' },
        { id: 48, title: '寵愛', content: '親しい人から愛される' },
        { id: 49, title: '愛慕', content: '誰かに愛をあたえる' },
        { id: 50, title: '熟達', content: 'いつもの仕事・作業に習熟する' },
        { id: 51, title: '現在', content: 'いまの瞬間に集中して生きる' },
        { id: 52, title: '適度', content: '過剰を避けてほどよいところを探す' },
        { id: 53, title: '単婚', content: '唯一の愛し合える相手を見つける' },
        { id: 54, title: '反抗', content: '権威やルールに疑問を持って挑む' },
        { id: 55, title: '配慮', content: '他人を心づかって世話すること' },
        { id: 56, title: '開放', content: '新たな体験、発想、選択肢に心を開く' },
        { id: 57, title: '秩序', content: '整理されて秩序のある人生を送る' },
        { id: 58, title: '情熱', content: 'なんらかの発想、活動、人々に深い感情を抱く' },
        { id: 59, title: '快楽', content: '良い気分になること' },
        { id: 60, title: '人気', content: '多くの人に好かれる' },
        { id: 61, title: '権力', content: '他人をコントロールする' },
        { id: 62, title: '目的', content: '人生の意味を方向性を定める' },
        { id: 63, title: '合理', content: '理性と論理に従う' },
        { id: 64, title: '現実', content: '現実的、実践的にふるまう' },
        { id: 65, title: '責任', content: '責任をもって行動する' },
        { id: 66, title: '危険', content: 'リスクを取ってチャンスを手に入れる' },
        { id: 67, title: '恋愛', content: '興奮して燃えるような恋をする' },
        { id: 68, title: '安全', content: '安心感を得る' },
        { id: 69, title: '受諾', content: 'ありのままの自分を受け入れる' },
        { id: 70, title: '自制', content: '自分の行動を自分でコントロールする' },
        { id: 71, title: '自尊', content: '自分に自信を持つ' },
        { id: 72, title: '自知', content: '自分について深い理解を持つ' },
        { id: 73, title: '献身', content: '誰かに奉仕する' },
        { id: 74, title: '性愛', content: '活動的で満足のいく性生活を送る' },
        { id: 75, title: '単純', content: 'シンプルでミニマルな暮らしをする' },
        { id: 76, title: '孤独', content: '他人から離れて１人でいられる時間と空間を持つ' },
        { id: 77, title: '精神', content: '精神的に成長し成熟する' },
        { id: 78, title: '安定', content: 'いつも一定して変化のない人生を送る' },
        { id: 79, title: '寛容', content: '自分と違う存在を尊重して受け入れる' },
        { id: 80, title: '伝統', content: '過去から受け継がれてきたパターンを尊重する' },
      ],
      important: [],
      normal: [],
      unimportant: [],
    }
  },
}
</script>
