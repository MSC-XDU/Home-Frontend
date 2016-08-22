<template>
  <div>
    <splash></splash>
    <div class="content-wrap">
      <div class="content">
        <h2 class="content-head">
          我们是谁?
        </h2>
        <div class="content-body pure-g">
          <div v-for="card in intro" class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-card-title" style="color: rgba(50, 96, 187, 1.0)">
              <i class="fa {{card.icon}}"></i>
              <span>{{card.title}}</span>
            </h3>
            <p class="content-card-content">
              {{card.content}}
            </p>
          </div>
        </div>
      </div>
      <div class="content">
        <h2 class="content-head">
          我们能给你什么?
        </h2>
        <div class="content-body pure-g">
          <div v-for="card in benefits" class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-card-title" style="color: rgba(244, 157, 47, 1.0)">
              <i class="fa {{card.icon}}"></i>
              <span>{{card.title}}</span>
            </h3>
            <p class="content-card-content">{{card.content}}</p>
          </div>
        </div>
      </div>
      <div class="content">
        <h2 class="content-head">
          我们需要怎样的你?
        </h2>
        <div class="content-body pure-g">
          <div v-for="card in needs" class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <h3 class="content-card-title" style="color: rgba(178, 19, 16, 1.0)">
              <i class="fa {{card.icon}}"></i>
              <span>{{card.title}}</span>
            </h3>
            <p class="content-card-content">{{card.content}}</p>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="pure-g">
          <div id="join-btn" class="pure-u-1-1">
            <h2 class="join-title">
              <span class="msc" style="color: rgba(50, 96, 187, 1.0)">M</span>
              <span class="msc" style="color: rgba(244, 157, 47, 1.0)">S</span>
              <span class="msc" style="color: rgba(178, 19, 16, 1.0)">C</span>
            </h2>
            <a class="pure-button pure-button-primary" v-link="'/join'">JOIN US</a>
            <h4>
              我愿意等   希望你来
            </h4>
          </div>
        </div>
      </div>
      <page-footer></page-footer>
    </div>
  </div>
</template>
<style scoped>
  .pure-g > div {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .l-box {
    padding: 1em;
  }

  .content-wrap {
    position: absolute;
    top: 78%;
    width: 100%;
    z-index: 2;
    background-color: #fff;
  }

  .content-wrap > div {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .content-wrap > div:nth-child(2) {
    background-color: rgba(45, 62, 80, 1.0);
  }

  .content-wrap > div:nth-child(4) {
    padding-top: 10px;
  }

  .content-wrap > div:nth-child(2) .content-head {
    color: rgba(255, 255, 255, 1.0);
  }

  .content-wrap > div:nth-child(2) p {
    color: rgba(170, 170, 170, 1.0);
  }

  .content .content-head {
    text-align: center;
    font-size: 2em;
    margin-bottom: 1.5em;
  }

  .content-wrap .content-card-content {
    text-indent: 1em;
    letter-spacing: 0.05em;
    font-size: 1.4em;
    line-height: 1.25em;
  }

  .content .content-card-title {
    font-size: 1.4em;
  }

  .content .content-card-title:last-child {
    margin-left: 15px;
  }

  .content .content-card-content {
    font-size: 0.9em;
  }

  .join-title {
    width: 100%;
    text-align: center;
    display: block;
  }

  .join-title span {
    font-size: 3em;
    margin: 3px;
  }

  #join-btn {
    text-align: center;
  }
</style>
<script>
  import Splash from './components/Splash.vue'
  import Footer from './components/Footer.vue'

  export default{
    data () {
      return {
        intro: [{
          icon: 'fa-windows',
          title: '背景',
          content: '微软学生俱乐部(MSC)是微软亚州研究院各个高校合作，以“学习先进技术，开拓创新思维，体验多元文化，成就一流人才”为宗旨在全国各大高校成立的学生组织。'
        }, {
          icon: 'fa-rocket',
          title: '历史',
          content: '西电微软学生俱乐部成立于2007年10月30日，至今已走过九年的时光。从创办以来，我们快速发展，用了较短时间便已走到全国各大微软学生俱乐部的最前方。'
        }, {
          icon: 'fa-comments',
          title: '大家庭',
          content: '在这里，不论你是技术大神还是零基础的小萌新，你都会很快的融入我们这个逗逼的大家庭。在这里，有热心的学姐学长带你浪，有一级棒的大神带你飞~'
        }, {
          icon: 'fa-users',
          title: '多样的选择',
          content: '西电MSC目前设有技术部，活动部，联络部，传媒部，人力资源部（不招新）五个部门以及主席团。这里面总有一个适合你的部门。'
        }],
        benefits: [{
          icon: 'fa-coffee',
          title: '有爱的小伙伴',
          content: 'MSC与其说是一个俱乐部,不如说是一个其乐融融的大家庭。你在这里能结识相伴四年的伙伴。Family Day,周年庆,日常聚会等等活动都能让你享受大家庭的欢乐。'
        }, {
          icon: 'fa-terminal',
          title: '组队竞赛',
          content: '有计划参加编程之美,菁英计划,Hackathon等等由微软组织的学生竞赛。只要你有想法,就能拉上小伙伴组队参加。更有机会参与微软学生夏令营~'
        }, {
          icon: 'fa-certificate',
          title: '技术分享',
          content: '定期会进行技术沙龙,大牛分享技术知识,如机器学习系列讲座等等。更有职场达人,学长学姐来分享介绍经验。让丰富的学习机会充实你的课余生活。'
        }, {
          icon: ' fa-fire',
          title: '多样的活动',
          content: '迎新活动,Family Day,周年庆,日常Codind,日常聚会等等。在MSC各种各样的活动等着你来参加,释放你的热情,提高你的技能。'
        }],
        needs: [{
          icon: 'fa-newspaper-o',
          title: '热爱文字',
          content: '具有出色的新闻稿编辑能力，并且可以熟练使用各种公众平台的萌新们看过来啦，联络部需要你！欢迎加入我们！'
        }, {
          icon: 'fa-code',
          title: '热爱技术',
          content: '技术部有很多热爱技术的人,我们喜欢新的idea,喜欢面对挑战,喜欢亲手实现自己的想法。我们关注很多方向,各有所长。总之如果你热爱技术,那么欢迎加入技术部。'
        }, {
          icon: 'fa-star-o',
          title: '热爱活动',
          content: '活动部需要策划型人才，活动、出游都需要我们的组织，只要你思维全面、热心交际或者控场能力超群、办事能力出众，那么活动部就是你大展才华的舞台。来吧，我们期待不平凡的你。'
        }, {
          icon: 'fa-instagram',
          title: '热爱艺术',
          content: '俱乐部的活动海报和宣传视频都由我们出品，传媒需要你熟练的技术，需要你新颖的设计思路，如果你掌握PS/AI，或你知晓AE/PR，又或你是一名手绘大触，我们期待你来。'
        }]
      }
    },
    components: {
      'splash': Splash,
      'page-footer': Footer
    }
  }
</script>
