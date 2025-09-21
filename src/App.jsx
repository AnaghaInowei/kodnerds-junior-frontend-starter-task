import { useState } from 'react'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 15

  const blogPosts = [
    {
      id: 1,
      title: "Energy Efficiency ideas to improve business sustainability",
      description: "Energy Efficiency with Business Sustainability for substantial savings.",
      author: "FAARUQ AZEEZ",
      date: "23 May, 2024",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center",
      views: 20,
      likes: 20,
      comments: 20
    },
    {
      id: 2,
      title: "Energy Efficiency ideas to improve business sustainability",
      description: "Energy Efficiency with Business Sustainability for substantial savings.",
      author: "FAARUQ AZEEZ",
      date: "23 May, 2024",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop&crop=center",
      views: 20,
      likes: 20,
      comments: 20
    },
    {
      id: 3,
      title: "Energy Efficiency ideas to improve business sustainability",
      description: "Energy Efficiency with Business Sustainability for substantial savings.",
      author: "FAARUQ AZEEZ",
      date: "23 May, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      views: 20,
      likes: 20,
      comments: 20
    },
    {
      id: 4,
      title: "Energy Efficiency ideas to improve business sustainability",
      description: "Energy Efficiency with Business Sustainability for substantial savings.",
      author: "FAARUQ AZEEZ",
      date: "23 May, 2024",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center",
      views: 20,
      likes: 20,
      comments: 20
    },
    {
      id: 5,
      title: "Energy Efficiency ideas to improve business sustainability",
      description: "Energy Efficiency with Business Sustainability for substantial savings.",
      author: "FAARUQ AZEEZ",
      date: "23 May, 2024",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop&crop=center",
      views: 20,
      likes: 20,
      comments: 20
    },
    {
      id: 6,
      title: "Energy Efficiency ideas to improve business sustainability",
      description: "Energy Efficiency with Business Sustainability for substantial savings.",
      author: "FAARUQ AZEEZ",
      date: "23 May, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      views: 20,
      likes: 20,
      comments: 20
    }
  ]

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const renderPaginationNumbers = () => {
    const numbers = []
    const startPage = Math.max(1, currentPage - 2)
    const endPage = Math.min(totalPages, currentPage + 2)

    for (let i = startPage; i <= endPage; i++) {
      numbers.push(i)
    }

   
    if (startPage > 1) {
      numbers.unshift(1, '...')
    }
    if (endPage < totalPages) {
      numbers.push('...', totalPages)
    }

    return numbers
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Explore Topics</h1>
      </header>
      
      <div className="cards-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="card">
            <div className="card-image">
              <img src={post.image} alt={post.title} />
            </div>
            
            <div className="card-content">
              <div className="card-author">
                <div className="author-avatar">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Author" />
                </div>
                <div className="author-info">
                  <span className="author-name">{post.author}</span>
                  <span className="post-date">{post.date}</span>
                </div>
              </div>
              
              <h3 className="card-title">{post.title}</h3>
              <p className="card-description">{post.description}</p>
              
              <a href="#" className="read-more">Read More →</a>
              
              <div className="card-engagement">
                <div className="engagement-item">
                  <span className="engagement-icon">👁</span>
                  <span className="engagement-count">{post.views}</span>
                </div>
                <div className="engagement-item">
                  <span className="engagement-icon">⭐</span>
                  <span className="engagement-count">{post.likes}</span>
                </div>
                <div className="engagement-item">
                  <span className="engagement-icon">💬</span>
                  <span className="engagement-count">{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button 
          className="pagination-btn" 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        <div className="pagination-numbers">
          {renderPaginationNumbers().map((number, index) => (
            <button
              key={index}
              className={`pagination-number ${number === currentPage ? 'active' : ''}`}
              onClick={() => typeof number === 'number' && handlePageChange(number)}
              disabled={number === '...'}
            >
              {number}
            </button>
          ))}
        </div>
        
        <button 
          className="pagination-btn" 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
