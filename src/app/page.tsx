export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white p-8">
        <h1 className="text-6xl font-bold mb-4">TaskMaster</h1>
        <p className="text-xl mb-8">Simple task management app with priorities and due dates</p>
        <p className="text-3xl font-semibold">$19/month</p>
        <button className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
