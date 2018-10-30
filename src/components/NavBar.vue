<template>
    <d-navbar toggleable="md" type="dark" theme="secondary" fixed="top" sticky>
        <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
        <d-navbar-brand>
            <h6 class="text-white my-auto mr-4">Cubefuse Zen</h6>
        </d-navbar-brand>

        <d-collapse is-nav id="nav-collapse">
            <d-navbar-nav>
                <d-nav-item href="#">Link</d-nav-item>
                <d-nav-item href="#" disabled>Disabled</d-nav-item>
                <d-dropdown text="Dropdown" is-nav>
                    <d-dropdown-item>Action</d-dropdown-item>
                    <d-dropdown-item>Another action</d-dropdown-item>
                    <d-dropdown-item>Something else here</d-dropdown-item>
                    <d-dropdown-divider />
                    <d-dropdown-item>Separated link</d-dropdown-item>
                </d-dropdown>
            </d-navbar-nav>
        </d-collapse>
    </d-navbar>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
