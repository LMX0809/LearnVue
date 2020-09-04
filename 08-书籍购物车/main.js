const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '西游记',
        date: '2000-2',
        price: 49,
        count: 2
      },
      {
        id: 2,
        name: '三国演义',
        date: '2001-1',
        price: 48,
        count: 3
      },
      {
        id: 3,
        name: '水浒传',
        date: '1999-9',
        price: 33,
        count: 4
      },
      {
        id: 4,
        name: '红楼梦',
        date: '1998-8',
        price: 88,
        count: 4
      }
    ],

  },
  methods:{
    addOne(index,count){
      this.books[index].count++
    },
    subOne(index,count){
      this.books[index].count--
    },
    btnRemove(index){
      this.books.splice(index, 1)


    }
  },
  //过滤器，本质是函数
  filters:{
    showPrice(price){
      return '￥'+ price.toFixed(2)
    }

  },
  computed:{
    totalPrice:function (){
      let tPrice = 0
      for(let book of this.books){
        tPrice += book.count * book.price
      }
      return tPrice
    }
  }

})