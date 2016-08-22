<template>
  <div style="width: 100%">
    <div class="department column-center">
      <h1>招新部门</h1>
      <div v-for="(i, intro) in intros" class="section pure-g">
        <div v-if="i % 2 == 0" class="logo pure-u-1-1 pure-u-md-2-5 column-center">
          <img :src="intro.icon">
          <h2>{{intro.name}}</h2>
        </div>
        <p v-else class="p pure-u-1-1 pure-u-md-3-5">{{{intro.p}}}</p>
        <div v-if="i % 2 != 0" class="logo pure-u-1-1 pure-u-md-2-5 column-center">
          <img :src="intro.icon">
          <h2>{{intro.name}}</h2>
        </div>
        <p v-else class="p pure-u-1-1 pure-u-md-3-5">{{{intro.p}}}</p>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>
<style scoped>
  h1 {
    margin: 100px 0;
    font-size: 2.3em;
  }

  .department {
    width: 100%;
    padding-top: 48px;
  }

  .section {
    width: 100%;
    padding: 50px 0;
  }

  .department .section:nth-child(2n) {
    background: rgba(247, 247, 249, 1.0);
  }

  .logo {
  }

  .logo > h2 {
    margin-bottom: 0;
  }

  img {
    max-width: 100px;
    height: auto;
    border-radius: 50px;
  }

  .pure-g > p {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 1em;

    letter-spacing: 0.05em;
    line-height: 1.25em;
    word-wrap: break-word;
    word-break: break-all;
  }

  @media screen and (min-width: 1024px) {
    .section {
      width: 1024px;
    }
  }
</style>
<script>
  import Footer from './components/Footer.vue'

  export default{
    data () {
      return {
        intros: [{
          icon: 'https://oc7r9dv0c.qnssl.com/image/main/jishu.png',
          name: '技术部',
          p: '在技术部， 你会体验到技术沙龙上关于：<br><br>安卓/Windows 10 UWP开发<br> 游戏开发<br> ACM算法<br> ASP.NET/PHP/Python/Clojure/Go/Ruby等等Web开发<br> 信息安全<br><br> 等等有趣的新知识； 抱团参加 hackathon/菁英计划/编程之美 等等比赛，获取经验，赢取奖金；'
        }, {
          icon: 'https://oc7r9dv0c.qnssl.com/image/main/lianluo.png',
          name: '联络部',
          p: '联络部主要负责俱乐部公众平台运营、维护以及与微软亚洲院的联络。<br><br>我们负责通过微信公众号、微博、博客等公众平台及时向大家发出俱乐部的最新信息，包括俱乐部的活动预告、各种竞赛的宣传以及在活动之后新闻稿的撰写。<br><br>同时作为连接研究院与俱乐部的枢纽，我们负责与微软亚洲院的联络，向研究院提交每次活动的新闻稿和三周报告，及时反馈俱乐部的活动信息 <br><br>加入我们，你将会结识一大波俱乐部优秀的小伙伴们，一起进步一起浪，还再等什么呢？'
        }, {
          icon: 'https://oc7r9dv0c.qnssl.com/image/main/huodong.png',
          name: '活动部',
          p: ' 发愁自己技术零基础？害怕大学课余生活不够嗨？担心结交不到交心的好友?来微软活动部吧！活动部是整个微软俱乐部的基石，俱乐部的大部分活动都要由我们来策划、准备，活动多样有趣，学姐学长亲切和蔼。<br><br>在这里你能参加大神主讲的技术沙龙，能策划一年一度的狂欢盛宴，能加入新生破冰之旅的无节操轰趴，能约起线下的吃货聚餐。<br><br>在这里只要你有才华就不愁无处施展，在这里只有你有想法就不怕默默无闻。我们期待不凡的你，期待你的到来。'
        }, {
          icon: 'https://oc7r9dv0c.qnssl.com/image/main/chuanmei.png',
          name: '传媒部',
          p: '不管你是PS大神还是鬼畜小能手，这里我们都欢迎。有活动时做做海报，FamilyDay拍个视频，平时收集收集主席团大家的黑照然后聚会时分享出来。<br><br>技术不是最主要的，只要你敢想爱玩，凭着你天马行空的创意和逗比幽默的性格来这里随意勾搭，就会有学姐带你浪，有学长带你飞'
        }]
      }
    },
    components: {
      'page-footer': Footer
    }
  }
</script>
