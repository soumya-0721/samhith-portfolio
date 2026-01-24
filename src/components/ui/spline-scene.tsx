"use client";

import Spline from '@splinetool/react-spline';

export function SplineScene() {
  return (
    <div className="w-full h-full">
         {/* Using a public Spline scene URL. Usually you'd use your own from Spline export. */}
         {/* This is a placeholder geometric scene. The user can swap this URL. */}
         <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
    </div>
  );
}
