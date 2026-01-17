
import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center space-x-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-tertiary fill-current" />
                        ))}
                    </div>
                    <blockquote className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        "SuperCX transformed our customer support — response times cut from <span className="text-primary">12 hours</span> to under <span className="text-primary">1.5 hours</span>."
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 mb-4 border-2 border-primary/30 flex items-center justify-center">
                            <span className="text-xl font-bold text-primary">CX</span>
                        </div>
                        <cite className="not-italic">
                            <div className="text-lg font-semibold text-white">CX Head</div>
                            <div className="text-sm text-gray-400">Leading Retail Brand</div>
                        </cite>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

