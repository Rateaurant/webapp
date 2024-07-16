<script lang="ts">
    import "../../app.css"
    import logo from '$assets/logo.svg'
    import home from 'iconoir/icons/home-alt.svg'
    import menu from 'iconoir/icons/menu.svg'
    import order from 'iconoir/icons/curve-array.svg'
    import analysis from 'iconoir/icons/graph-up.svg'
    import earning from 'iconoir/icons/dollar.svg'
    import search from 'iconoir/icons/search.svg'
    import settings from 'iconoir/icons/settings.svg'
    import profile from 'iconoir/icons/profile-circle.svg'
    import arrow from 'iconoir/icons/arrow-separate-vertical.svg'
    import feedback from 'iconoir/icons/send-diagonal.svg'
    import help from 'iconoir/icons/help-circle.svg'

    import NavItem from '$components/NavItem.svelte'

    let nav_state: "collapse" | "expand" = "expand";
</script>

<div class="flex h-[100vh] w-[100vw]">
    <nav data-state={nav_state} class="
        flex flex-col items-center bg-white-50 justify-between h-full
        transition-width duration-300 w-[4rem]
        group hover:w-[16rem]
    ">
        <div class="flex flex-col p-2 gap-1">
            <img src={logo} alt="Rateaurant Logo" width={36} />
            <NavItem data={home} alt="Home" label="Home" />
            <hr class="h-[2px] w-full bg-white-0 border-none" />
            <NavItem data={menu} alt="Menu" label="Menu" />
            <NavItem data={order} alt="Order" label="Order" />
            <NavItem data={analysis} alt="Analysis" label="Analysis" />
            <NavItem data={earning} alt="Earning" label="Earning" />
        </div>
        <div class="flex flex-col p-2 gap-1">
            <NavItem data={search} alt="Search" label="Search" />
            <NavItem data={settings} alt="Settings" label="Settings" />
            <NavItem data={profile} alt="Profile" label="Profile" />
        </div>
    </nav>
    <div class="flex flex-col w-full">
        <nav class="flex items-center p-2 bg-white-50 justify-between">
            <div class="bg-white-0 ml-5 p-2 pt-1 pb-1 flex rounded-md cursor-pointer">
                <span>Rateaurant</span>
                <img src={arrow} alt="Change Restaurant" width={16} />
            </div>
            <div class="flex p-2 gap-3">
                <img src={feedback} alt="Feedback" width={24} />
                <img src={help} alt="Help" width={24} />
            </div>
        </nav>
        <slot />
    </div>
</div>
