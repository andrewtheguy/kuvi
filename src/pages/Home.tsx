import { Link } from 'react-router-dom';
import { categories } from '../data';

export default function Home() {
    return (
        <div className="home-container">
            <div className="categories-grid">
                {categories.map((category) => (
                    <Link
                        to={`/category/${category.id}`}
                        key={category.id}
                        className="category-card"
                    >
                        <div className="category-content">
                            <h2>{category.title}</h2>
                            <p>{category.description}</p>
                        </div>
                        <div className="category-arrow">→</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
