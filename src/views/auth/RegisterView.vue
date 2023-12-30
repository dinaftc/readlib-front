<template>
    <div class="w-full h-screen flex flex-col items-center gap-4 justify-center">

        <div className=" w-full sm:w-fit  text-2xl ">Register now</div>

        <div class="flex  items-center gap-4 justify-center w-fit  h-fit">

            <div class="w-full sm:w-fit grid md:grid-cols-2 gap-x-4 gap-y-2">

                <div class="form-control w-full sm:w-80 flex flex-col">
                    <label class="label">
                        <span class="label-text">first name <span class="text-red-500">*</span></span>
                    </label>
                    <input type="text"
                        class="block w-full h-10 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                </div>

                <div class="form-control  w-full sm:w-80 flex flex-col">
                    <label class="label">
                        <span class="label-text">last name<span class="text-red-500">*</span></span>
                    </label>
                    <input type="text"
                        class="block w-full h-10 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                </div>



                <div class="form-control  w-full sm:w-80 flex flex-col">
                    <label class="label">
                        <span class="label-text">email <span class="text-red-500">*</span></span>
                    </label>
                    <input type="text"
                        class="block w-full h-10 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                </div>

                <div class="form-control  w-full sm:w-80 flex flex-col">
                    <label class="label">
                        <span class="label-text">Password <span class="text-red-500">*</span></span>
                    </label>
                    <input type="text"
                        class="
                        block w-full h-10 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset  placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 ring-gray-300 focus:ring-primary " />
                    <span class="label-text mt-1 text-xs">
                        le mot de passe doit contenir minimum 8 caractéres</span>
                </div>







            </div>


        </div> <button @click="login"
            class="btn btn-primary w-1/4 mt-2 btn-sm pixa-btn capitalize fill-white flex justify-center px-10 group">
            register
            <span v-if="loading" class="loading loading-ring loading-sm"></span>


        </button>


    </div>
</template>

<script setup>





</script>

<style lang="scss" scoped></style>