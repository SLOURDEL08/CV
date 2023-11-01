import React, { useState } from 'react';
import Modal from './Modal'

const FilterableProjects = () => {
  const [currentFilter, setCurrentFilter] = useState(null);
  const [selectedModal, setSelectedModal] = useState(null);

  const projectData = [
    { id: 1, category: 'Backend', image: 'homegrim.png', title: 'Mon Vieux Grimoire - Node JS', modalName: 'modalMVG' },
    { id: 2, category: 'Frontend', image: 'kasaprev.png', title: 'Projet Kasa - React JS', modalName: 'modalKasa' },
    { id: 3, category: 'Frontend', image: 'ninacardu.png', title: 'Toast Collectif - Sur mesure', modalName: 'modalNinaC' },
    { id: 4, category: 'Frontend', image: 'bookiprev.png', title: 'Booki - Html/css', modalName: 'modalBooki' },
    { id: 5, category: 'Frontend', image: 'sophieprev.png', title: 'Sophie Bluel - Html/css/JS', modalName: 'modalSophieBluel' },
    { id: 6, category: 'Frontend', image: 'ferrariprev.png', title: 'Ferrari Beverly - React JS', modalName: 'modalFerrari' },
    { id: 7, category: 'Frontend', image: 'tesla.png', title: 'Tesla.com - React JS', modalName: 'modalFerrari' },
  ];

  const handleFilter = (category) => {
    if (currentFilter === category) {
      setCurrentFilter(null);
    } else {
      setCurrentFilter(category);
    }
  };

  const openModal = (modalName) => {
    setSelectedModal(modalName);
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  const filteredProjects = currentFilter
    ? projectData.filter((project) => project.category === currentFilter)
    : projectData;

  return (
    <div>
      <div className="filter-buttons">
        <button
          onClick={() => handleFilter('Frontend')}
          className={currentFilter === 'Frontend' ? 'active-filters' : ''}
        >
          Frontend
        </button>
        <button
          onClick={() => handleFilter('Backend')}
          className={currentFilter === 'Backend' ? 'active-filters' : ''}
        >
          Backend
        </button>
        <button
          onClick={() => handleFilter('WordPress')}
          className={currentFilter === 'WordPress' ? 'active-filters' : ''}
        >
          WordPress
        </button>
        <button
          onClick={() => handleFilter('Other')}
          className={currentFilter === 'Other' ? 'active-filters' : ''}
        >
          Autres
        </button>
      </div>
      <div className="contain-pro">
  {filteredProjects.map((project) => (
    <div key={project.id} className="item-project">
      <a onClick={() => openModal(project.modalName)}>
        <div className="img-container">
          <img src={project.image} alt={`projet ${project.id}`} />
          <div className='over-proj'></div>
        </div>
        <p className='titleprojectv'>{project.title}</p>
      </a>
    </div>
  ))}
</div>



      {selectedModal && (
        // Afficher la modale sélectionnée
        <Modal
          modalName={selectedModal}
          isOpen={true}
          onClose={closeModal}
          // Autres données spécifiques à la modal
        />
      )}
    </div>
  );
};

export default FilterableProjects;