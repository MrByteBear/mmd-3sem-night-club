const SubmitButton = () => {
    return ( <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-10 py-3 text-sm font-semibold tracking-wide uppercase border-t-4 border-b-4 hover:bg-pink-600 hover:text-black transition"
            >
            Submit
          </button>
        </div> );
}
 
export default SubmitButton;