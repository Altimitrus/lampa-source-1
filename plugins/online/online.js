import Online from './component'

Lampa.Component.add('online', Online)

Lampa.Template.add('button_online',`<div class="full-start__button selector view--online">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 30.051 30.051" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
<g xmlns="http://www.w3.org/2000/svg">
    <path d="M19.982,14.438l-6.24-4.536c-0.229-0.166-0.533-0.191-0.784-0.062c-0.253,0.128-0.411,0.388-0.411,0.669v9.069   c0,0.284,0.158,0.543,0.411,0.671c0.107,0.054,0.224,0.081,0.342,0.081c0.154,0,0.31-0.049,0.442-0.146l6.24-4.532   c0.197-0.145,0.312-0.369,0.312-0.607C20.295,14.803,20.177,14.58,19.982,14.438z" fill="currentColor"/>
    <path d="M15.026,0.002C6.726,0.002,0,6.728,0,15.028c0,8.297,6.726,15.021,15.026,15.021c8.298,0,15.025-6.725,15.025-15.021   C30.052,6.728,23.324,0.002,15.026,0.002z M15.026,27.542c-6.912,0-12.516-5.601-12.516-12.514c0-6.91,5.604-12.518,12.516-12.518   c6.911,0,12.514,5.607,12.514,12.518C27.541,21.941,21.937,27.542,15.026,27.542z" fill="currentColor"/>
</g></svg>

<span>Онлайн</span>
</div>`)

Lampa.Template.add('online',`<div class="online selector">
    <div class="online__body">
        <div class="online__title">{title}</div>
        <div class="online__quality">{quality}</div>
    </div>
</div>`)

Lampa.Listener.follow('full',(e)=>{
    if(e.type == 'complite'){
        let btn = Lampa.Template.get('button_online')

        btn.on('hover:enter',()=>{
            Lampa.Activity.push({
                url: '',
                title: 'Онлайн' ,
                component: 'online',
                search: e.data.movie.title,
                search_one: e.data.movie.title,
                search_two: e.data.movie.original_title,
                movie: e.data.movie,
                page: 1
            })
        })

        e.object.activity.render().find('.view--torrent').after(btn)
    }
})