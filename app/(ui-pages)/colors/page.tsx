import React from "react";

const colors = ["#b8e994", "#78e08f", "#38ada9", "#079992", "#82ccdd", "#60a3bc", "#3c6382", '#0a3d62', '#6a89cc', '#4a69bd', '#1e3799', "#0c2461", '#f6b93b', '#fa983a', '#e58e26', "#fbc531", '#e1b12c', '#4cd137', '#44bd32', '#192a56', '#273c75', '#353b48', '#2f3640', '#f1c40f', '#f39c12', '#e67e22', '#d35400', '#8e44ad', '#9b59b6', '#1abc9c', '#16a085', '#2ecc71', '#27ae60', '#2980b9', '#3498db', '#badc58', '#6ab04c', '#30336b', '#130f40', '#f9ca24', '#f0932b', '#95afc0', '#535c68', '#22a6b3', '#40407a', '#2c2c54', '#706fd3', '#474787', '#227093', '#34ace0', '#33d9b2', '#218c74', '#ffb142', '#cc8e35', '#ffda79', '#ccae62', '#ff793f', '#cd6133', '#b33939', '#ff5252']
const ColorsTestPage = () => {
  return (
    <div className="grid grid-cols-4 gap-4 px-4">
      {colors
        .map((n, i) => {
          return (
            <div key={i} className="max-h-32 px-4 py-2 text-ellipsis w-auto border-4 overflow-clip" style={{ borderColor: n}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              culpa ipsum rerum non tempora perspiciatis rem minus a officia
              nihil quidem natus aperiam aliquam, quos repudiandae deserunt
              praesentium? Nobis, voluptates!
            </div>
          );
        })}
    </div>
  );
};

export default ColorsTestPage;
