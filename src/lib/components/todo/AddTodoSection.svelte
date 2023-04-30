<script>
    import { addTodo } from  '../../store/TodoStore'
</script>

<section class="flex justify-between">
    <h3 class="text-xl font-bold text-gray-three">CheckList</h3>
    <button
        class="group flex items-center rounded-md border-cream-four bg-green-one
         px-6 py-3 text-lg font-semibold text-gray-five outline outline-2 outline-offset-2 outline-green-one hover:text-gray-five
          focus-visible:text-green-five focus-visible:outline-green-five"
        type="button"
        on:click={addTodo}
    >
    Add Task
    <svg 
    class="ml-3 h-4 w-4 text-gray-five group-hover:text-green-five group-focus-visible:text-green-five"
    aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round" ></path>
      </svg>
    </button>
</section>